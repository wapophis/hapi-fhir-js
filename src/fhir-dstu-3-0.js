import _AddressDt from './spi/dataTypes/AddressDt.js';
import _BooleanDt from './spi/dataTypes/BooleanDt.js';
import _CodeableConceptDt from './spi/dataTypes/CodeableConceptDt.js';
import _CodingDt from './spi/dataTypes/CodingDt.js';
import _ContactPointDt from './spi/dataTypes/ContactPointDt.js';
import _HumanNameDt from './spi/dataTypes/HumanNameDt.js';
import _IdentifierDt from './spi/dataTypes/IdentifierDt.js';
import _NarrativeDt from './spi/dataTypes/NarrativeDt.js';
import _PeriodDt from './spi/dataTypes/PeriodDt.js';
import _ReferenceDt from './spi/dataTypes/ReferenceDt.js';
import _ExtensionDt from './spi/dataTypes/ExtensionDt.js';


export const AddressDt=_AddressDt;
export const BooleanDt=_BooleanDt;
export const CodeableConceptDt=_CodeableConceptDt;
export const CodingDt=_CodingDt;
export const ContactPointDt=_ContactPointDt;
export const HumanNameDt=_HumanNameDt;
export const IdentifierDt=_IdentifierDt;
export const NarrativeDt=_NarrativeDt;
export const PeriodDt=_PeriodDt;
export const ReferenceDt=_ReferenceDt;
export const ExtensionDt=_ExtensionDt;



// SPEC DSTU-3.0
import Patient from './spi/resources/Patient.js';
import {_AnimalElement,_LinkElement,_ComunicationElement} from './spi/resources/Patient.js';

export const PatientResource=Patient;
export const PatientResource_AnimalElement=_AnimalElement;
export const PatientResource_LinkElement=_LinkElement;
export const PatientResource_ComunicationElement=_ComunicationElement;

