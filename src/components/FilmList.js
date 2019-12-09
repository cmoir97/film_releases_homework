import React, {Component} from 'react'
import Film from './Film'
class FilmList extends Component {


render(){

  const filmNodes = this.props.films.map(film => {
    return (
      <Film
      key={film.id}
      name={film.name}
      url={film.url}
      >
      {film.name}
      </Film>
    )
  })

  return(
    <ul className="FilmList">
    {filmNodes}
    </ul>
  )
}
}

export default FilmList
