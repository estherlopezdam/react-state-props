import NavBar from "./components/ui/navbar/navbar"
import Panel from "./components/ui/panel/panel"
import Counter from "./components/ui/counter/counter"


function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="container py-5">
        <Panel className="m-1">
          <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis laboriosam facilis dignissimos officia? Labore illum repellat tempora tenetur eaque 
            incidunt! Non dolor eius earum iure! Quos hic eum aut odit.</p>
        </Panel>
        <Panel className=" mb-1" mode="danger">
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius nihil deleniti excepturi, 
            nostrum voluptatibus quasi fugit. 
            Et illum consequuntur sit, aliquam delectus deserunt dolorem, praesentium laborum quidem qui exercitationem!</p>
        </Panel>

        <Counter className="mb-1" min={0} max={10} initialCountValue={5}></Counter>
        <Counter className="mb-1" min={0} max={10} initialCountValue={-5}></Counter>
        <Counter initialCountValue={10} />
      </div>
      
    </>
  )
}

export default App
