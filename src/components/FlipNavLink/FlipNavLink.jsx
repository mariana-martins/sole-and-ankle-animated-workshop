import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

const FlipNavLink = ({ href, children }) => {
  return (
    <FlipLinkWrapper href={href} aria-label={`Link to ${children}`}>
      <FlipLinkContent data-hover={children}>
        <span>{children}</span>
      </FlipLinkContent>
    </FlipLinkWrapper>
  );
};

const FlipLinkWrapper = styled.a`
  line-height: 44px;
  perspective: 1000px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FlipLinkContent = styled.span`
  font-size: 1.125rem;
  position: relative;
  display: inline-block;
  padding: 0 14px;
  transition: transform 0.3s;
  transform-origin: 50% 0;
  transform-style: preserve-3d;

  &::before {
    position: absolute;
    top: 100%;
    width: 100%;
    height: 100%;
    content: attr(data-hover);
    transform: rotateX(-90deg);
    transform-origin: 100% 0;
  }

  ${FlipLinkWrapper}:hover &,
  ${FlipLinkWrapper}:focus & {
    transform: rotateX(90deg) translateY(-20px);
  }
`;

export default FlipNavLink;
