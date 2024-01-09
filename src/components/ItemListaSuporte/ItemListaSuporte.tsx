import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { MdLiveHelp } from 'react-icons/md'

interface ItemProps {
    children: ReactNode;
    toValue: string
}

const ListaSuporte = styled.li`

`

const LinkEstilizado = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;

    span{
        color: black;
        font-size: 20px;
    }
    
`

const ItemListaSuporte = (props: ItemProps) => {
    return (
        <ListaSuporte>
            <LinkEstilizado to={props.toValue}>
                <MdLiveHelp color="black" size={30} />
                <span>{props.children}</span>
            </LinkEstilizado>
        </ListaSuporte>
    )
}
export default ItemListaSuporte