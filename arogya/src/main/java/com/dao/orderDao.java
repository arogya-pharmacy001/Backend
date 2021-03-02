package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.orders;

@Repository
public class orderDao {

	@Autowired
	EntityManagerFactory factory;
	
	
	
	public List<orders> getAllOrdersByQuantity()
	{
		EntityManager emf = factory.createEntityManager();
		Query qry = emf.createNativeQuery(null);
		
		
		List<orders> list = qry.getResultList();
		return list;
	}

	
	public List<orders> getAllOrdersByDate()
	{
		EntityManager em = factory.createEntityManager();
		Query qry = em.createNativeQuery(null);
		
		List<orders> list = qry.getResultList();
		return list;
	}
	
	
	public List<orders> getAllOrdersSaleByMonth(int year, int month)
	{
		EntityManager em = factory.createEntityManager();
		Query qry = em.createNativeQuery(null);
		
		List<orders> list = qry.getResultList();
		return list;
	}
	
}
