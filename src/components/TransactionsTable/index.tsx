import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
    
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 3.000,00</td>
                        <td>Salários</td>
                        <td>01/12/2021</td>
                    </tr>
                    <tr>
                        <td>Feira</td>
                        <td className="withdraw">R$ - 1.000,00</td>
                        <td>Mercados</td>
                        <td>05/12/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ - 1.000,00</td>
                        <td>Moradia</td>
                        <td>10/12/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">R$ - 200,00</td>
                        <td>Serviços</td>
                        <td>15/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}