import React, { useEffect, useState } from 'react'
import ProsecutorsOfficesService from '../services/prosecutorsOffices'
import { ProsecutorOffice } from '../interfaces/prosecutorOffice'
import { Link } from 'react-router-dom'
import Title from '../components/title'
import '../styles/prosecutors-offices.css'

interface IPropsProsecutorsOfficesItem {
  data: ProsecutorOffice[];
  onShow: (id: Number) => void;
}

export const ProsecutorsOfficesItem = (props: IPropsProsecutorsOfficesItem) => {
  const prosecutorsOffices: ProsecutorOffice[] = props.data
  const { onShow } = props

  const handleShow = (id: Number) => onShow(id)

  const list = prosecutorsOffices.map(prosecutorOffice => {
    return (
      <tr key={prosecutorOffice.id?.toString()}>
        <td>{prosecutorOffice.id?.toString()}</td>
        <td>{prosecutorOffice.name}</td>
        <td>{prosecutorOffice.address}</td>
        <td className="text-nowrap">{prosecutorOffice.phone}</td>
        <td className="text-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-sm btn-danger" onClick={() => handleShow(Number(prosecutorOffice.id))}>Borrar</button>
            <Link className="btn btn-sm btn-success" to={`/prosecutorsOffices/edit/${prosecutorOffice.id}`}>Editar</Link>
          </div>
        </td>
      </tr>
    )
  })
  return (
    <tbody>
      {list}
    </tbody>
  )
}

const ProsecutorsOffices = () => {
  // const [isLoading, setIsLoading] = useState(false)
  const prosecutorsOfficesService = new ProsecutorsOfficesService()

  const [prosecutorsOffices, setProsecutorsOffices] = useState<ProsecutorOffice[]>([])
  const [show, setShow] = useState<Boolean>(false)
  const [id, setId] = useState<Number>(0)

  const handleClose = () => setShow(false)
  const handleShow = (idShow: Number) => {
    setShow(true)
    setId(idShow)
    console.log(idShow, show)
  }

  const loadProsecutorsOffices = () => {
    prosecutorsOfficesService.getProsecutorsOffices()
      .then((data: ProsecutorOffice[]) => {
        setProsecutorsOffices(data)
      })
      .catch(err => console.error(err))
  }

  const handleDelete = () => {
    prosecutorsOfficesService.deleteProsecutorOffice(id)
      .then(() => {
        setShow(false)
        loadProsecutorsOffices()
      })
      .catch(err => console.error(err))
  }

  useEffect(loadProsecutorsOffices, [])

  return (
    <>
      <div className={`modal fade ${show && 'show'}`} style={{ display: show && 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="text-dark text-center">¿Está seguro de borrar esta fiscalía?</h2>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button type="button" className="btn btn-lg btn-danger" onClick={handleClose}>No</button>
              <button type="button" className="btn btn-lg btn-success" onClick={handleDelete}>Sí</button>
            </div>
          </div>
        </div>
      </div>

      <Title
        textTitle="Listado de Fiscalías"
        textLinkTo="Agregar"
        iconLinkTo="fas fa-plus-circle"
        linkTo="/prosecutorsOffices/add"
      />

      <div className="row my-3">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Ubicación</th>
                  <th>Teléfono</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <ProsecutorsOfficesItem data={prosecutorsOffices} onShow={handleShow} />
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProsecutorsOffices