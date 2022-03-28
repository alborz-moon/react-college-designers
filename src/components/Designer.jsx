function Designer({ name, image, meta, description }) {
  return (
    <div className="designer">
      {
        <>
          <img className="image" src={image} alt="" />
          <div className="content">
            <h4 className="name">
            {name}
            </h4>
            <p className="meta">
              {meta}
            </p>
            <p className="desciption">
              {description}
            </p>
          </div>
        </>
        }
    </div>
  )
}

export default Designer