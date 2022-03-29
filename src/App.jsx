import Designer from './components/Designer'

import desingers from './data/designers'

function App() {
  return (
    <div className="container">
      <h1 className="heading">اساتید دوره</h1>
      <div className="designers">
        {
          desingers.map((element,index) => {
            return(
              <Designer key={index} name={element.name} image={element.image} meta={element.meta} description={element.description} /> 
            )
          })
        }
      </div>
    </div>
  )
}

export default App
