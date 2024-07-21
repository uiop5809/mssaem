'use client'

import React, { ReactNode } from 'react'

const ContainerTheme = {
  color: {
    white: 'bg-white',
    purple: 'bg-main3',
  },
}

type Color = keyof typeof ContainerTheme.color

export interface ContainerProps {
  children: ReactNode
  color: Color
}

const Container = ({ children, color }: ContainerProps) => (
  <div
    className={`w-full h-full px-7.5 py-8.75 rounded-7.5 ${ContainerTheme.color[color]}`}
  >
    children{children}
  </div>
)

export default Container
