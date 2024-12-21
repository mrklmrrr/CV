import { Banner, Projects, Info } from "./components"

function App() {
  return (
    <div className="max-w-[1120px] mx-auto py-12 md:py-20 px-4">
      <div className="flex flex-col gap-10">
        <Banner />
        <div className="flex flex-col gap-6 md:flex-row">
          <Projects />
          <div className="shrink-0 md:w-52">
            <Info />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
