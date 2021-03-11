package com.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Stock;
@Repository
public class BillDao {
	
	@Autowired
	EntityManagerFactory emf;
	
	public int addToBill(int stock_id,int c_id)
	{
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		int n=110;
		Stock s=manager.find(Stock.class, tran);
		if(s==null)
		{
			return 2;
		}
		else
		{
			int billid=n;
			int custid=c_id;
			String itemname=s.getItem_name();
			System.out.println(itemname);
			float amt=s.getPrice();
			s.setQuantity(s.getQuantity()-1);
			Query qry=manager.createNativeQuery("insert into bill values(?1,?2,?3,?4,?5)");
			qry.setParameter(1, billid);
			n++;
			qry.setParameter(2, itemname);
			qry.setParameter(3, amt);
			qry.setParameter(4, 1);
			qry.setParameter(5, custid);
			
			return 1;
			
			
		}
		
	}

}
