import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

const FlipNavLink = ({ href, children }) => {
  return (
    <SlideLinkWrapper href={href}>
      <SlideLinkContent data-hover={children}>
        <span>{children}</span>
      </SlideLinkContent>
    </SlideLinkWrapper>
  );
};

const SlideLinkWrapper = styled.a`
  overflow: hidden;
  padding: 0 4px;
  height: 1.2em;
  font-size: 1.125rem;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const SlideLinkContent = styled.span`
  position: relative;
  display: inline-block;
  transition: transform 0.3s;

  &::before {
    position: absolute;
    top: 100%;
    content: attr(data-hover);
    font-weight: ${WEIGHTS.bold};
    transform: translate3d(0, 0, 0);
  }

  ${SlideLinkWrapper}:hover &,
  ${SlideLinkWrapper}:focus & {
    transform: translateY(-100%);
  }
`;

export default React.memo(FlipNavLink);
