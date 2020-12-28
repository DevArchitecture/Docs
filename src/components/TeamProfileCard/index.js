/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export default function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  linkedinUrl,
}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={githubUrl + '.png'}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl} target="_blank">
                GitHub
              </a>
            )}
            {linkedinUrl && (
              <a className="button button--secondary" href={linkedinUrl} target="_blank">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
