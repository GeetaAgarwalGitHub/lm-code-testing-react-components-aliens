import { useState } from 'react';
import W12MHeader from './W12MHeader';
import Fields from './fields';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />

<Fields label="Species" type="text" name="txtSpecies" />
<Fields label="Planet" type="text" name="txtPlanet" />
<Fields label="Numberof Beings" type="text" name="txtNoOfBeings" />
<Fields label="What is 2+2" type="select" name="sel2+2" />
<Fields label="species" type="textarea" name="txtReason"/>
<Fields label="Submit" type="button" name="btnSubmit">
	</Fields>		
		{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
