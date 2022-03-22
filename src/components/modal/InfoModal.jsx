import React from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'

import * as S from './InfoModal.styles'

const InfoModal = ({
    isOpen,
    onRequestClose,
    pokemonInfoModal
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <S.ButtonContainer>
            <button
                type="button" 
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            </S.ButtonContainer>
            <div>
                <S.HeaderContainer>
                    <h1>{pokemonInfoModal?.name}</h1>
                    <img
                        width="320px"
                        src={pokemonInfoModal?.sprites?.front_default}
                        alt={pokemonInfoModal.name}
                    />
                </S.HeaderContainer>
                <S.StatusContainer>
                    <S.Title>Habilidades</S.Title>
                    <div>
                        {pokemonInfoModal?.abilities?.map((item) => (
                            <p>{item?.ability?.name}</p>
                        ))}
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>Tipo</S.Title>
                    <div>
                        {pokemonInfoModal?.types?.map((item) => (
                            <p>{item.type.name}</p>
                        ))}
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>Status</S.Title>
                    <div>
                        {pokemonInfoModal?.stats?.map((item) => (
                            <S.Status>
                                <p>{item?.stat.name}</p>
                                <p>{item?.base_stat}</p>
                            </S.Status>
                        ))}
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>Altura</S.Title>
                    <div>
                        <p>{pokemonInfoModal.height}</p>
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>Peso</S.Title>
                    <div>
                        <p>{pokemonInfoModal.weight}</p>
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>ID</S.Title>
                    <div>
                        <p>{pokemonInfoModal.id}</p>
                    </div>
                </S.StatusContainer>
                <S.StatusContainer>
                    <S.Title>Experiência</S.Title>
                    <div>
                        <p>{pokemonInfoModal.base_experience}</p>
                    </div>
                </S.StatusContainer>
            </div>
        </Modal>
    );
}

export default InfoModal;
