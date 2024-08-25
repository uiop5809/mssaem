'use client'

import Image from 'next/image'
import Container from '@/components/common/Container'
import { useToast } from '@/hooks/useToast'
import {
  usePostDiscussion,
  usePostDiscussionOptionFiles,
} from '@/service/discussion/useDiscussionService'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '@/components/common/Button'

interface Option {
  content: string
  hasImage: boolean
  image: string | null
}

const DiscussionCreatePagePage = () => {
  const router = useRouter()
  const { showToast } = useToast()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [options, setOptions] = useState<Option[]>([
    {
      content: '',
      hasImage: false,
      image: null,
    },
    {
      content: '',
      hasImage: false,
      image: null,
    },
  ])
  const [image, setImage] = useState<string[]>([])
  const { mutate: postDiscussion } = usePostDiscussion()
  const { mutate: postDiscussionOptionFiles } = usePostDiscussionOptionFiles()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  const handleOptionTextChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, content: value } : option,
    )
    setOptions(updatedOptions)
  }

  const handleUploadImage = async (blob: Blob): Promise<string> => {
    const formImage = new FormData()
    formImage.append('image', blob)

    return new Promise<string>((resolve, reject) => {
      postDiscussionOptionFiles(formImage, {
        onSuccess: (imgUrl) => {
          resolve(imgUrl)
        },
        onError: (error) => {
          reject(error)
        },
      })
    })
  }

  const handleImageChange = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      try {
        const imgUrl = await handleUploadImage(file)
        setImage((prev) => [...prev, imgUrl])
        const updatedOptions = options.map((option, i) =>
          i === index ? { ...option, image: imgUrl, hasImage: true } : option,
        )
        setOptions(updatedOptions)
      } catch (error) {
        throw new Error('Error uploading image')
      }
    }
  }

  const formData = new FormData()
  const data = {
    title,
    content,
    getOptionReqs: options.map(({ image: _image, ...rest }) => rest),
  }

  formData.append(
    'DiscussionReq',
    new Blob([JSON.stringify(data)], { type: 'application/json' }),
  )
  formData.append(
    'image',
    new Blob([JSON.stringify(image)], { type: 'application/json' }),
  )

  const handleSubmit = () => {
    if (!title) {
      showToast('제목을 입력해주세요.')
      return
    }
    const isValidOptions = options.every((option) => {
      if (!option.content.trim() && !option.image) {
        showToast(`최소 2개의 내용 또는 이미지 중 하나는 있어야 합니다.`)
        return false
      }
      return true
    })
    if (!isValidOptions) {
      return
    }
    postDiscussion(formData)
    router.back()
  }

  const handleAddOption = () => {
    if (options.length < 4) {
      setOptions([
        ...options,
        {
          content: '',
          hasImage: false,
          image: null,
        },
      ])
    }
  }

  const handleRemoveOption = (indexToRemove: number) => {
    if (options.length > 2) {
      image.splice(indexToRemove, 1)
      const updatedOptions = options.map((option, index) =>
        index === indexToRemove ? { ...option, hasImage: false } : option,
      )
      setOptions(updatedOptions)
      setOptions(options.filter((option, index) => index !== indexToRemove))
    }
  }

  return (
    <div className="w-full-vw ml-half-vw p-5% sm:px-8% sm:py-8 md:px-13% bg-main3">
      <Container color="white">
        <div className="text-title1 font-bold text-maindark mb-5">
          과몰입 토론
        </div>

        <div className="text-headline font-normal text-gray2 mb-2">
          제목을 입력해주세요.
        </div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full h-10 border border-gray4 rounded-md p-2 mb-5 focus:outline-none"
        />

        <div className="text-headline font-normal text-gray2 mb-2">
          선택지를 선택해주세요. (2~4개)
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 justify-center items-center mb-5">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white w-full h-full min-h-[12rem] rounded-2xl border border-gray-300 p-3"
            >
              <div className="w-full h-full min-h-[10rem] rounded-2xl flex flex-col items-center justify-center p-3 relative">
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="absolute top-2 right-2"
                  >
                    <Image
                      src="/images/discussion/delete_btn.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                )}

                <label
                  htmlFor={`image-upload-${index}`}
                  className="flex items-center justify-center w-full h-full cursor-pointer"
                >
                  {option.image !== null ? (
                    <Image
                      src={option.image}
                      alt="Selected"
                      width={150}
                      height={150}
                      quality={100}
                      className="object-contain"
                    />
                  ) : (
                    <div>
                      <Image
                        src="/images/discussion/img_btn.svg"
                        alt="Image"
                        width={40}
                        height={40}
                      />
                    </div>
                  )}
                  <input
                    id={`image-upload-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="hidden"
                  />
                </label>

                <input
                  type="text"
                  value={option.content}
                  onChange={(e) => handleOptionTextChange(index, e)}
                  className="w-full h-10 border border-gray-300 rounded-md p-2 mt-2 focus:outline-none"
                />
              </div>
            </div>
          ))}
          {options.length < 4 && (
            <button
              type="button"
              onClick={handleAddOption}
              className="flex justify-center items-center"
            >
              <Image
                src="/images/discussion/plus_btn.svg"
                alt="Add"
                width={40}
                height={40}
              />
            </button>
          )}
        </div>

        <div className="text-headline font-normal text-gray2 mb-2">
          내용을 입력해주세요. (선택)
        </div>
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full h-20 border border-gray4 rounded-md p-2 mb-4 focus:outline-none"
        />

        <div className="flex justify-end mt-4 gap-2">
          <Button
            color="LIGHTPURPLE"
            size="small"
            text="취소하기"
            onClick={() => router.back()}
          />
          <Button
            color="PURPLE"
            size="small"
            text="글 쓰기"
            onClick={handleSubmit}
          />
        </div>
      </Container>
    </div>
  )
}

export default DiscussionCreatePagePage
