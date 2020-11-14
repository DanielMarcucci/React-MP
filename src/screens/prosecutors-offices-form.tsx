import React, { useEffect, useState } from 'react'
import { useForm, Resolver } from 'react-hook-form';
import { RouteComponentProps, useHistory } from 'react-router-dom'

import ProsecutorsOfficesService from '../services/prosecutorsOffices'
import { ProsecutorOffice } from '../interfaces/prosecutorOffice'
import Title from '../components/title';
// import { Link } from 'react-router-dom'

interface IProsecutorsOfficesParams {
  id?: string;
}

interface FormValues extends ProsecutorOffice {
  name: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
        name: {
          type: 'required',
          message: 'Este campo es requerido.',
        },
      }
      : {},
  }
}

const ProsecutorsOfficesForm = (routeComponentProps: RouteComponentProps<IProsecutorsOfficesParams>) => {
  const prosecutorsOfficesService = new ProsecutorsOfficesService()
  const [prosecutorOffice, setProsecutorOffice] = useState<FormValues>({ name: '' })
  const [isEdit, setIsEdit] = useState<Boolean>(false)

  const { id } = routeComponentProps.match.params
  let history = useHistory()

  let { register, handleSubmit, errors, reset } = useForm<FormValues>({ resolver, defaultValues: prosecutorOffice })

  const onSubmit = handleSubmit((data) => {
    if (isEdit) {
      prosecutorsOfficesService.updateProsecutorOffice(Number(id), data)
        .then(() => {
          history.push("/prosecutorsOffices")
        })
        .catch(err => console.error(err))
    } else {
      prosecutorsOfficesService.createProsecutorOffice(data)
        .then(() => {
          history.push("/prosecutorsOffices")
        })
        .catch(err => console.error(err))
    }
  })

  const loadProsecutorOffice = (matchId = Number(id)) => {
    if (matchId) {
      prosecutorsOfficesService.getProsecutorOffice(matchId)
        .then((data: FormValues) => {
          setProsecutorOffice(data)
          setIsEdit(true)
          reset(data)
        })
        .catch(err => console.error(err))
    }
  }

  useEffect(loadProsecutorOffice, [])

  return (
    <>
      <Title
        textTitle={`${isEdit ? 'Editar' : 'Agregar'} fiscalía`}
        textLinkTo="Regresar"
        iconLinkTo="fas fa-arrow-left"
        linkTo="/prosecutorsOffices"
      />
      <div className="card bg-dark mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 p-4 text-center">
            <i className="far fa-building" style={{ fontSize: "17em" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Ingresar Datos</h5>
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="col-sm">
                    <label htmlFor="name">Nombre</label>
                    <input className="form-control" type="text" id="name" name="name" placeholder="Ciudad" ref={register} />
                    {errors?.name && <p>{errors.name.message}</p>}
                  </div>
                  <div className="col-sm">
                    <label htmlFor="phone">Número de teléfono</label>
                    <input className="form-control" type="text" id="phone" name="phone" placeholder="+502 0000 0000" ref={register} />
                  </div>
                </div>
                <div className="form-group">
                </div>
                <div className="form-group">
                  <label htmlFor="address">Dirección</label>
                  <input className="form-control" type="text" id="address" name="address" placeholder="2 Av. 13 Calle Zona 1" ref={register} />
                </div>

                <button className="btn btn-success btn-block">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProsecutorsOfficesForm