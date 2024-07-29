import Textarea, { TextareaProps } from '@/components/common/Textarea'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Textarea',
  component: Textarea,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['gray'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large'],
      },
    },
  },
} as Meta<TextareaProps>

const Template: StoryFn<TextareaProps> = (args: TextareaProps) => (
  <Textarea {...args} />
)

export const LargeTextarea = Template.bind({})
LargeTextarea.args = {
  value:
    '회원 가입 시 이름, 생년월일, 휴대전화번호 등의 정보를 허위로 기재해서는 안 됩니다. 회원 계정에 등록된 정보는 항상 정확한 최신 정보가 유지될 수 있도록 관리해 주세요. 자신의 계정을 다른 사람에게 판매, 양도, 대여 또는 담보로 제공하거나 다른 사람에게 그 사용을 허락해서는 안 됩니다. 아울러 자신의 계정이 아닌 타인의 계정을 무단으로 사용해서는 안 됩니다. 이에 관한 상세한 내용은 계정 운영 정책을 참고해 주시기 바랍니다.',
  color: 'gray',
  size: 'large',
}
