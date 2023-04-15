import { ThemeProvider } from '@material-ui/core/styles';
import { Card, Flex, Select, Spinner, Text } from '@sanity/ui';
import MUIDataTable from 'mui-datatables';
import { ChangeEvent, useEffect, useState } from 'react';
import { clientPreConfig } from '../../sanity.client';
import pepeJedi from './assets/images/pepe-jedi.gif';
import { columns } from './datatable-columns';
import { options } from './datatable-options';
import datatableTheme from './datatable-theme';

const withConfig = (config) => {
  return typeof sanityClient.withConfig === 'function'
    ? sanityClient.withConfig(config)
    : sanityClient;
};

function CMYKParticipationDatatable() {
  const [{ cmykParticipantsList, cmykVersion, loading }, setState] = useState({
    cmykParticipantsList: [],
    cmykVersion: '5',
    loading: true,
  });

  const getCMYKParticipants = (cmykVer: string) => {
    const cmkykQuery = `*[_type == "cmykParticipant" &&  cmykVersion == "${cmykVer}"] { _createdAt, "discordUser": discordUser->username, "email": discordUser->email, aboutParticipant, "timezone":discordUser->timezone, participationType, isChix, workExperience, stackWanted, projects, experience, timeAvailability, otherQuestions, previousKnowledge, status}`;

    client.fetch(cmkykQuery, {}).then((cmykPart) => {
      setState((prevState) => ({
        ...prevState,
        cmykParticipantsList: cmykPart,
        loading: false,
      }));
    });
  };

  useEffect(() => {
    getCMYKParticipants(cmykVersion);
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setState((prevState) => ({
      ...prevState,
      cmykVersion: value,
      loading: true,
    }));

    getCMYKParticipants(value);
  };

  return !loading ? (
    <ThemeProvider theme={datatableTheme}>
      <MUIDataTable
        title="CMYK | Lista de Participantes"
        columns={columns}
        data={cmykParticipantsList}
        options={{
          ...options,
          customToolbar: () => (
            <>
              <Select
                value={cmykVersion}
                onChange={handleSelectChange}
                name="cmykVersion"
                aria-label="cmykVersion"
              >
                {[...Array(+cmykVersion)].map((_, i) => (
                  <option value={i + 1}>CMYK v{i + 1}.0</option>
                ))}
              </Select>

              <img src={pepeJedi} alt="jedi pepe" width="40px" height="40px" />
            </>
          ),
        }}
      />
    </ThemeProvider>
  ) : (
    <Card padding={4}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="fill"
        gap={3}
      >
        <Spinner muted />
        <Text muted size={1}>
          Cargando...
        </Text>
      </Flex>
    </Card>
  );
}

export default {
  name: 'cmyk-participation-datatable',
  component: CMYKParticipationDatatable,
};
