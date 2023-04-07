import React from 'react'

function About() {
  return (
    <div id="about" className='col-11 mx-auto text-dark d-lg-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='col-lg-5 col-11 mx-auto'>

        <img className="rounded w-100" src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" alt="" />
      </div>

      <div className='col-lg-6 col-11 mx-auto'>
        <h1 className='text-black'>#AboutGenero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi id alias incidunt fugit esse expedita maiores quas exercitationem facilis nisi, delectus aspernatur quidem sit est natus autem. Quo harum alias, quasi necessitatibus reiciendis ab perferendis laboriosam minus optio non. Quam pariatur earum eveniet repellat repellendus nisi laborum. Eaque, accusantium.</p>
        <button class="button-82-pushable">
          <a href="https://youtu.be/3Er4V2mwHPw">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">
            Watch AfterMovie
          </span>
          </a>
         
        </button>      </div>

    </div>
  )
}

export default About