

interface ContainerImageProps {
    children: React.ReactNode
}
export const ContainerImage = ({ children }: ContainerImageProps) => {
    return (
        <div className="max-w-[240px] h-auto">
            {children}
        </div>
    )
}