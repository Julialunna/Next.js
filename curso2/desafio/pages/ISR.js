export default function SSG(){
  console.log("página ISR rodando");
  return (<h1>Página ISR</h1>)
}

export async function getStaticProps(context) {
  console.log("getStaticPropsISR rodando")
  return {
    props: {},
    revalidate: 10 // will be passed to the page component as props
  }
}
