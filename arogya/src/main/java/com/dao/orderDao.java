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
		Query qry = emf.createNativeQuery("select * from orders order by items desc");
		
		
		List<orders> list = qry.getResultList();
		return list;
	}

	
	public List<orders> getAllOrdersByDate()
	{
		EntityManager em = factory.createEntityManager();
		Query qry = em.createNativeQuery("select * from orders order by order_date desc");
		
		List<orders> list = qry.getResultList();
		return list;
	}
	
	
	public List<orders> getAllOrdersSaleByMonth(int year, int month)
	{
		EntityManager em = factory.createEntityManager();
		Query qry = em.createQuery("select p from orders where p.order_date like 'year-month-%'");
		
		//select * from orders where order_date like '2020-12-%'
		
		List<orders> list = qry.getResultList();
		return list;
	}
	
}
