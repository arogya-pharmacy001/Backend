package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.orders;
import com.dao.OrdersRepository;


@Service
public class orderService {
	@Autowired
	OrdersRepository OR;
	
	public List<orders> displayAllOrders()
	{
		return OR.findAll();
	}
	
	public String addOrder(orders od)
	{
		Optional<orders> op=OR.findById(od.getOrder_id());
		if(op.isPresent())
		{
			return"RECORD ALREADY PRESENT";
		}
		else
		{
			OR.save(od);
			return "RECORD SAVED";
		}
	}
	
	public String updateOrder(orders od)
	{
		Optional<orders> op=OR.findById(od.getOrder_id());
		if(op.isPresent())
		{
			OR.saveAndFlush(od);
			return"RECORD updated";
		}
		else
		{
			return "RECORD NOT FOUND";
		}
		
	}
	
	public String deleteOrder(int oid)
	{
		if(OR.existsById(oid))
		{
			OR.deleteById(oid);
			return "record deleted";
		}
		else
		{
			return "id not found";
		}
	}
	
}
