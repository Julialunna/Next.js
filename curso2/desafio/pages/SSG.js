export default function SSG(){
  console.log("página SSG rodando");
  return (<h1>Página SSR</h1>)
}

export async function getStaticProps(context) {
  console.log("getStaticProps rodando")
  return {
    props: {}, // will be passed to the page component as props
  }
}
