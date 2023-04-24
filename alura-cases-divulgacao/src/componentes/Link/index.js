import NextLink from 'next/link';
function Tittle(){
    return(
        <h1>
            {children}
        </h1>
    )
}
export default function Link({children, href, ...props}){
    return(
    <NextLink href={href}>
    {children}
    </NextLink>
    )
}