import { useEffect } from "react";
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from 'services/plant';

const PlantListPage = () => {

    useEffect(() => {
        (async () => {
            const response = await plantService.getPlants();
            const data = await response.json();
            console.log(data);
        })()
    }, []);
    return <RedirectToSignInIfSignedOut>
        <NavBar />
    </RedirectToSignInIfSignedOut>
};

export default PlantListPage;