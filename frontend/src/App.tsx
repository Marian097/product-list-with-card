import Home from '@/page/Home';
import Shop from "@/hooks/Shop";

function App() {
  const render = Shop()
  return (
    <>
    <Home data = {render.data}/>
    </>
  )
}

export default App
