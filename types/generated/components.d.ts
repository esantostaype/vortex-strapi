import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAbout extends Schema.Component {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    titleLine1: Attribute.String;
    titleLine2: Attribute.String;
    titleLine3: Attribute.String;
    video: Attribute.Media;
    videoPoster: Attribute.Media;
    subtitle: Attribute.String;
  };
}

export interface ServicesAdjectives extends Schema.Component {
  collectionName: 'components_services_adjectives';
  info: {
    displayName: 'adjectives';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ServicesProcess extends Schema.Component {
  collectionName: 'components_services_processes';
  info: {
    displayName: 'Process';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.about': HomeAbout;
      'home.hero': HomeHero;
      'services.adjectives': ServicesAdjectives;
      'services.process': ServicesProcess;
    }
  }
}
