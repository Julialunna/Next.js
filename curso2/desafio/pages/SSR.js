export default function SSR(){
  console.log("página SSR rodando");
  return (<h1>Página SSR</h1>)
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps rodando")
  return {
    props: {}, // will be passed to the page component as props
  }
}
