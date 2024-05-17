import Link from "next/link";
import Image from "next/image";

export default function New() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <p className="text-5xl text-orange-500 font-bold">WITAJ NA STRONIE 2</p>
                <div className="py-8">
                    <Image src="/123.jpg" alt="lodz" width={600} height={400}/>
                </div>
                <p></p>
                <Link href="/">Strona główna</Link>

            </div>
        </div>
    );
}