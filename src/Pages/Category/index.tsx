import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import HeaderInfo  from "../../components/HeaderInfo";

import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Container, CategoriesGrid } from './styles';
import CategoryMenu from '../../components/CategoryMenu';


const Category: React.FC = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  return(
    <Container>
      {loading && <Loader isFixed={true} zIndex={99999999} />}
      <CategoriesGrid>
        <CategoryMenu
          category="Camera"
          to="cameras">
            <p>aaa</p>
        </CategoryMenu>
      </CategoriesGrid>
      <HeaderInfo supTitle="Página Inicial" title="Category" margin="2rem 0 1rem 0" to="/pagina2" />
      <ContentGrid>
        <Footer />
      </ContentGrid>
    </Container>
  );
}

export default Category;
