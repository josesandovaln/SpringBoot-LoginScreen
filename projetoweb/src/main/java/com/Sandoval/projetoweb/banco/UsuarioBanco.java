package com.Sandoval.projetoweb.banco;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Sandoval.projetoweb.entidade.Usuario;


@Repository
public interface UsuarioBanco extends CrudRepository<Usuario, Integer>{
    
}
