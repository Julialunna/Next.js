import NextLink from 'next/link';

export default function Home(){
    return(
        <>
          <h1>
              Ordem de execução
          </h1>
          <ul>
            <li>
              <NextLink href="/SSR"><a>SSR</a></NextLink>
            </li>
          <li>
              <NextLink href="/SSG"><a>SSG</a></NextLink>
          </li>
      
          <li>
              <NextLink href="/ISR"><a>ISR</a></NextLink>
          </li>
          </ul>
        </>
    )
}
