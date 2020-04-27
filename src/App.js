import React from 'react';
import EmployeeRow from './components/employee-row/employee-row'
import './App.css';
import data from './data/data.json';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
// import dataFilter from './dataFilter';

class App extends React.Component {

  dataToDisplay = data;

  constructor() {
    super()
    this.state = {
      leads: true,
      seniors: true,
      juniors: true,
      data: this.dataToDisplay
    }
    console.log(this.state, 'hello')
  };

  // switchLeads = () => {
  //   // if (this.state.leads === true) {
  //   //   this.setState({leads: false})
  //   // } else {
  //   //   this.setState({leads: true})
  //   // } return 
  //   return this.value
  // };

  dataFilter = (ifLeads, ifSeniors, ifJuniors) => {
    let dataCopy = data;

    if (ifLeads && !ifSeniors && !ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Developer lead'
        }
      )
    }
    if (!ifLeads && !ifSeniors && !ifJuniors) {
      dataCopy = [];
    }
    if (!ifLeads && ifSeniors && !ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Sr Developer'
        }
      )
    }
    if (!ifLeads && !ifSeniors && ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Jr Developer'
        }
      )
    }
    if (ifLeads && ifSeniors && !ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Developer lead' || item.job === 'Sr Developer'
        }
      )
    }
    if (ifLeads && !ifSeniors && ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Developer lead' || item.job === 'Jr Developer'
        }
      )
    }
    if (ifLeads && ifSeniors && ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Developer lead' || item.job === 'Jr Developer' || item.job === 'Sr Developer'
        }
      )
    }
    if (!ifLeads && ifSeniors && ifJuniors) {
      dataCopy = dataCopy.filter(
        (item) => {
          return item.job === 'Jr Developer' || item.job === 'Sr Developer'
        }
      )
    }
    // console.log(dataCopy)
    this.dataToDisplay = dataCopy

  }

  handleCheckLeads = (e) => {
    console.log(e.target.checked)
    let leadsVal = e.target.checked
    this.setState({
      leads: leadsVal
    })
    this.dataFilter(leadsVal, this.state.seniors, this.state.juniors)
  }

  handleCheckSeniors = (e) => {
    console.log(e.target.checked)
    let seniorsVal = e.target.checked
    this.setState({
      seniors: seniorsVal
    })
    this.dataFilter(this.state.leads, seniorsVal, this.state.juniors)
  }

  handleCheckJuniors = (e) => {
    console.log(e.target.checked)
    let juniorsVal = e.target.checked
    this.setState({
      juniors: juniorsVal
    })
    this.dataFilter(this.state.leads, this.state.seniors, juniorsVal)
  }

  // dataSort = (e) => {
  //   this.dataToDisplay.sort(

  //   );
  // }

  sortSalary = (e) => {
    console.log(e)
    this.dataToDisplay.sort(
      (a, b) => {
        return (a.salary - b.salary)
      }
    )
    this.setState(
      {
        data:this.dataToDisplay
      }
    )
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Hello, User!</h1>
          <p>
            Feel free to sort, filter, and view the employees below.
          </p>
          {/* <Button variant="primary">Add an Employee</Button>{' '} */}
          <hr></hr>
          <p>
            Which Roles do you want to include?
          </p>
          <Form>
            <Form.Group
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Developer Lead"
                defaultChecked='true'
                // id='leadCheck'
                onChange={this.handleCheckLeads}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Sr Developer"
                defaultChecked='true'

                onChange={this.handleCheckSeniors}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Jr Developer"
                defaultChecked='true'
                onChange={this.handleCheckJuniors}

              />
            </Form.Group>
          </Form>
          <hr></hr>
          <p>
            Click the Column label to sort the data by that column.
          </p>
        </Jumbotron>

        {/* ERIC CHECK THE PASSWORD GENERATOR USE THE SAME LOGIC FOR THE ICNLUSION OF VARIABLES 
        USE A SERIES OF IF STATEMENTS FOR YOUR LOGIC AND CREATE  A COPY OF THE BASE DATA TO CYCLE THROUGH AND MANIPULATE */}
        <div>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="table">
            <thead>
              <tr>
                <th
                  scope="col"
                // onClick= {}
                >
                  Name
                          </th>
                <th
                  scope="col"
                // onClick= {}
                >
                  Job
                          </th>
                <th
                  scope="col"
                  onClick={this.sortSalary}
                >
                  Salary
                          </th>
              </tr>

            </thead>
            <tbody>
              {this.dataToDisplay.map(
                (item, i) => {
                  return (
                    <EmployeeRow
                      data={item}
                      key={i}
                    >
                      {/* {console.log(i)} */}
                    </EmployeeRow>
                  )
                }
              )}
            </tbody>
          </Table>
        </div>

      </Container>
    )

  };
}

export default App;
