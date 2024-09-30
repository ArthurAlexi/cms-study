import Image from "next/image";

export function Header(){
    return (
        <header className="border-b mb-2 px-6 border-foreground">
            <Image alt="logo" 
                width={80}
                height={30}
                src="https://freesvg.org/img/Fake-Real-Black.png"
            />
        </header>
    )
}