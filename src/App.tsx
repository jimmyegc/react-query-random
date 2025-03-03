import './App.css'
import { useRandom } from './hooks/useRandom';

export const  App = ()  => {
 
  const query = useRandom()

  return (
    <div className='App App-header'>
      { 
        query.isFetching 
        ? (<h2>Cargando...</h2>) 
        : (<h2>Número aleatorio: { `${query.data}` }</h2>)
      }    
      {
        !query.isLoading && query.error && (<h3>{`${query.error}`}</h3>)
      }
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        { query.isFetching ? '...' : 'Nuevo número'}
        </button>
    </div>
  )
}


