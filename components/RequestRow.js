import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';


class RequestRow extends Component {

    state = {
        lodingOnApprove: false,
        loadingOnFinalize: false
    };

    onApprove = async () => {
        this.setState({lodingOnApprove: true});
        try {
            const campaign = Campaign(this.props.address);
            const account = await web3.eth.getAccounts();
            console.log(account);
            await campaign.methods.approveRequest(this.props.id).send({
                from: account[0],
                gas: '1000000'
            });
        } catch (err) {

        }

        this.setState({lodingOnApprove: false});
        Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    };

    onFinalize = async () => {
        this.setState({loadingOnFinalize: true});
        try {
            const campaign = Campaign(this.props.address);
            const account = await web3.eth.getAccounts();

            await campaign.methods.finalizeRequest(this.props.id).send({
                from: account[0],
                gas: '1000000'
            })
        } catch (err) {

        }
        this.setState({loadingOnFinalize: false});
        Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;
        const readytoFinalize = request.approvalCount > approversCount / 2;

        return (
            <Row disabled={request.complete} positive={readytoFinalize && !request.complete}>
                <Cell>{Number(this.props.id)+1}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : (
                        <Button color="green" basic onClick={this.onApprove} loading={this.state.lodingOnApprove}>
                            Approve
                    </Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                        <Button color="teal" basic onClick={this.onFinalize} loading={this.state.loadingOnFinalize}>
                            Finalize
                    </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow; 