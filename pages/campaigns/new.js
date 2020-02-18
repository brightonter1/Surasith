import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: ''
    }



    onSubmit = async (event) => {
        event.preventDefault();

        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await Factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0],
                    gas: '1000000'
                });

            Router.pushRoute('/');
        } catch (error) {
            console.log(error.Message);
        }

    }

    render() {
        return (
            <Layout>
                <h1>Create Campaign</h1>

                <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribute</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({ minimumContribution: event.target.value })
                            }
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;