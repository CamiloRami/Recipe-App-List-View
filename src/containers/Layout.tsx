interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className=" mx-auto flex w-full max-w-3xl flex-col bg-orange-50 text-center min-h-screen">
      {children}
    </div>
  )
}
