import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, Content, Table, TableDataContainer } from './TeamMembers.styles'
import DashboardLayout from '../../Layout/DashboardLayout';

const TeamMembers = () => {
  // if you want to see right sidebar change false to true
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState([])

  const url = 'https://fakerapi.it/api/v1/persons?_quantity=10'

  useEffect(() => {
    axios.get(url).then((response) => setTeam(response.data.data));
  }, []);

  return (


    <DashboardLayout show={show}>
      <Wrapper>
        <Content>
          <Table>
          <thead>
                <tr>
                  <th> NAME </th>
                  <th> EMAIL </th>
                  <th> PHONE NUMBER </th>
                  <th> GENDER </th>
                </tr>
              </thead>

              <tbody>
                {team
                  ? team.map((team, id) => (
                      <tr key={id}>
                        <TableDataContainer>
                          <div className="image__container">                            
                            <img src={team.image} alt="avatar" />
                          </div>
                          <div className="name">
                            {team.firstname} {team.lastname}
                          </div>
                        </TableDataContainer>
                        <td> {team.email} </td>
                        <td> {team.phone} </td>
                        <td> {team.gender.toUpperCase()} </td>
                      </tr>
                    ))
                  : null}
              </tbody>
          </Table>
        </Content>
      </Wrapper>
    </DashboardLayout>
  )
};

export default TeamMembers;
