import React from 'react'
import './TitleNavbar.css'
import { IoSearch,IoCaretDownSharp,IoHomeSharp,IoPerson  } from "react-icons/io5";

function TitleNavbar() {

    const NombreSucursal = 'Centro Uno';
    const NombreUsuario = 'Administrador';
  return (
    <>
    <div className="contenedor__TitleNabvar">
        <div className="logo__TitleNabvar">
            <img src="" alt="Logo Sistema" />
        </div>
        <div className="buscador__TitleNabvar">
            <div className="contenedor__buscador-TitleNabvar">
                <div className="icono__buscador-TitleNabvar">
                    <IoSearch/>
                </div>
                <input type="text" className='input__buscador-TitleNabvar' placeholder='Buscar Pacientes por CI, Nombre o Apellido'/>
            </div>

        </div>
        <div className="opciones__TitleNabvar">
        <div className="sucursal__TitleNabvar">
            <div className="contendor__sucursal-TitleNabvar">
                <div className="icono__sucursal-TitleNabvar">
                    <IoHomeSharp/>
                </div>
                <div className="texto__sucursal-TitleNabvar">
                    {NombreSucursal}
                </div>
                <div className="drow__sucursal-TitleNabvar">
                <IoCaretDownSharp />
                </div>
            </div>
        </div>
        <div className="usuario__TitleNabvar">
        <div className="contendor__usuario-TitleNabvar">
                <div className="icono__usuario-TitleNabvar">
                    <IoPerson />
                </div>
                <div className="texto__usuario-TitleNabvar">
                    {NombreUsuario}
                </div>
                <div className="drow__usuario-TitleNabvar">
                    <IoCaretDownSharp />
                    
                </div>
        </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default TitleNavbar