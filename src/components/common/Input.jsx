/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiListCheck } from "react-icons/bi";
import { Container, Content, FilterButton, FilterItem, FilterList, InputElement, Legend } from "../../styled/components/common/input";

export const Input = ({ icon, showFilterButton, options=[], ...props }) => {

    const [showOptions, setShowOptions] = useState(false);

    return (
        <Container type={props.type}>
            <Content>
                {showFilterButton &&
                    <>
                        <FilterButton onClick={() => setShowOptions(!showOptions)} type="button">
                        <BiListCheck/>
                        </FilterButton>
                        <FilterList active={showOptions}>
                            {options.length > 0
                                ? options.map((item, index) => <FilterItem key={`${item.label}-${index}`}>{item.label}</FilterItem>)
                                : <Legend>No options</Legend>
                            }
                        </FilterList>
                    </>
                }
                <InputElement { ...props } icon={icon} showFilterButton={showFilterButton} autoComplete="off"/>
                { icon && icon }
            </Content>
        </Container>
    )
}
