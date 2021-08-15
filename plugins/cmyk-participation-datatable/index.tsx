import React from 'react';
import MUIDataTable from 'mui-datatables';
import styles from './Styles.css';
import sanityClient from 'part:@sanity/base/client';
import Spinner from 'part:@sanity/components/loading/spinner';
import { FormControl, NativeSelect } from '@material-ui/core';

const withConfig = (config) => {
  return typeof sanityClient.withConfig === 'function'
    ? sanityClient.withConfig(config)
    : sanityClient;
};

class CMYKParticipationDatatable extends React.Component {
  state = {
    loading: true,
    cmykParticipantsList: [],
    cmykVersion: '4',
  };

  componentDidMount() {
    this.getCMYKParticipants();
  }

  getCMYKParticipants = (cmykVer = 4) => {
    withConfig({ apiVersion: 'v1' })
      .fetch(
        `*[_type == "cmykParticipant" &&  cmykVersion == "${cmykVer}"] { _createdAt, "discordUser": discordUser->username, "email": discordUser->email, aboutParticipant, "timezone":discordUser->timezone, experience, otherQuestions, participationLevel, previousKnowledge, status}`,
        {},
      )
      .then((cmykPart) => {
        this.setState({ cmykParticipantsList: cmykPart, loading: false });
      });
  };

  render() {
    const handleSelectChange = (value) => {
      this.setState({ cmykVersion: value.target.value, loading: true });
      this.getCMYKParticipants(parseInt(value.target.value, 10));
    };
    const columns = [
      {
        name: '_createdAt',
        label: 'Fecha',
        options: {
          filter: false,
          sort: true,
          customBodyRender: (value) => new Date(value).toLocaleString(),
        },
      },
      {
        name: 'discordUser',
        label: 'Usuario',
        options: {
          filter: false,
          sort: true,
        },
      },
      {
        name: 'email',
        label: 'Email',
        options: {
          filter: false,
          sort: true,
        },
      },
      {
        name: 'timezone',
        label: 'Zona Horaria',
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: 'aboutParticipant',
        label: 'Sobre mí',
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: 'experience',
        label: 'Experiencia',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => (value === 'yes' ? 'Sí' : 'No'),
        },
      },
      {
        name: 'participationLevel',
        label: 'Nivel de Participación',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) =>
            value === 'level1'
              ? 'Nivel 1 (HTML - CSS - JS)'
              : 'Nivel 2 (ReactJS - CSS a elección)',
        },
      },
      {
        name: 'previousKnowledge',
        label: 'Conocimientos',
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: 'otherQuestions',
        label: 'Otras preguntas',
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: 'status',
        label: 'Estado',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) =>
            value === 'revision' ? '🟡' : value === 'approved' ? '🟢' : '🔴',
        },
      },
    ];

    const CustomBtn = () => {
      return (
        <FormControl style={{ alignContent: 'center', margin: '10px 0' }}>
          <NativeSelect
            value={this.state.cmykVersion}
            onChange={handleSelectChange}
            name="cmykVersion"
            inputProps={{ 'aria-label': 'cmykVersion' }}
          >
            <option value="1">CMYK v1.0</option>
            <option value="2">CMYK v2.0</option>
            <option value="3">CMYK v3.0</option>
            <option value="4">CMYK v4.0</option>
          </NativeSelect>
        </FormControl>
      );
    };

    const options = {
      downloadOptions: { filename: 'cmypParticipantsList.csv', separator: ';' },
      selectableRowsHeader: false,
      selectableRowsHideCheckboxes: true,
      rowsPerPage: 15,
      rowsPerPageOptions: [10, 15, 20, 30, 50],
      customToolbar: () => <CustomBtn />,
      textLabels: {
        body: {
          noMatch: 'No hay resultados',
          toolTip: 'Sort',
          columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
        },
        pagination: {
          next: 'Siguiente',
          previous: 'Anterior',
          rowsPerPage: 'Filas por página:',
          displayRows: 'de',
        },
        toolbar: {
          search: 'Buscar',
          downloadCsv: 'Descargar CSV',
          print: 'Imprimir',
          viewColumns: 'Ver Columnas',
          filterTable: 'Filtrar Tabla',
        },
        filter: {
          all: 'Todos',
          title: 'FILTROS',
          reset: 'RESET',
        },
        viewColumns: {
          title: 'Ver Columnas',
          titleAria: 'Mostrar/Ocultar Columnas',
        },
      },
    };

    return (
      <div className={styles.container}>
        {!this.state.loading ? (
          <MUIDataTable
            title="CMYK Participation List"
            data={this.state.cmykParticipantsList}
            columns={columns}
            options={options}
          />
        ) : (
          <Spinner center message="Cargando..." />
        )}
      </div>
    );
  }
}

export default {
  name: 'cmyk-participation-datatable',
  component: CMYKParticipationDatatable,
};
