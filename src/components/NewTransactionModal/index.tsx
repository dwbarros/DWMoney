import { Container, RadioBox, TransactionTypeContainer } from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';


Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState('deposit')
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                className="react-modal-close"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" />

                <input placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setTransactionType('deposit'); }}
                        isActive={transactionType === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => { setTransactionType('withdraw'); }}
                        isActive={transactionType === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}