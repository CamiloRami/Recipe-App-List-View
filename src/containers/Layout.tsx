interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex w-full flex-col justify-center bg-orange-50 text-center">
      {children}
    </div>
  )
}
