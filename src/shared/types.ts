export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    Plans = 'plans',
    Contact = 'contact'
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string
  }

  export interface PlanType{
    name:string;
    description?:string;
    image:string;
  }