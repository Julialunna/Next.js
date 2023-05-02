

export default function App({ Component, pageProps }) {
  //console.log("_app.js rodando");
  return (<Component{...pageProps}></Component>)
}
