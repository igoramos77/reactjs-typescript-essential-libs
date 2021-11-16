import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import HeaderInfo  from "../../components/HeaderInfo";

import Loader from '../../components/Loader';
import Icon from '../../components/Icon';
import Footer from '../../components/Footer';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import TinySlider from 'tiny-slider-react';

import CategoryMenu from '../../components/CategoryMenu';

import hardware from '../../assets/categories/HARDWARE.png';
import brinquedos from '../../assets/categories/BRINQUEDOS.png';
import celular from '../../assets/categories/CELULAR-TELEFONE.png';
import tv from '../../assets/categories/TV.png';
import computadores from '../../assets/categories/COMPUTADORES.png';
import perifericos from '../../assets/categories/PERIFERICOS.png';

import { Container, CategoriesGrid } from './styles';

interface ICategoriesProps {
  id: number;
  image_url: string;
  name: string;
  description: string;
  administrator?: null;
}


const Dashboard: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ICategoriesProps[]>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get('/category/');

        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return(
    <Container>
      <HeaderInfo supTitle="Página Inicial" title="Departamentos" margin="2rem 0 1rem 0" to="/pagina2" />

      <CategoriesGrid>
        {loading && <Loader isFixed={false} zIndex={99999999} />}
        {data?.map((category, index) => (
          <CategoryMenu key={index} category={category.name} to={category.name}>
            <img src={category.image_url} alt={category.description} />
          </CategoryMenu>
        ))}
      </CategoriesGrid>

      <ContentGrid>
        <Footer />
      </ContentGrid>
    </Container>
  );
}

export default Dashboard;
