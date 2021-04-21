import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransition: () => void;
}

export function Header({ onOpenNewTransition }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransition}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}