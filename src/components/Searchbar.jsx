import React from 'react'

export const Searchbar = () => {
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className="form-control">
          <label htmlFor='name'>search</label>
          <input type='text'
            id='name'
          />
          <button className='btn btn-primary'>search</button>
        </div>
      </form>
    </section>
  )
}
