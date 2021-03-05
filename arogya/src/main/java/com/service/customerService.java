package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.dao.CustomerDao;
import com.dao.CustomerRepository;
@Service
public class customerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	CustomerDao cd;
	
	public List<Customer> sortById()
	{
		return cd.sortById();
	}
	public List<Customer> sortByname()
	{
		return cd.sortByName();
	}
	public List<Customer> sortByAddress()
	{
		return cd.sortByAddr();
	}



	
	public String addCustomer(Customer cust)
	{
		Optional<Customer> ct=customerRepository.findById(cust.getCust_id());
		if(ct.isPresent())
		{
			return "RECORD ALREADY PRESENT";
		}
		else
		{
			customerRepository.save(cust);
			return "RECORD SAVED";
		}
	}
	
	public List<Customer> showCustomers()
	{
		return customerRepository.findAll();
	}
	
	public String updateCustomer(Customer cust)
	{
		Optional<Customer> ct=customerRepository.findById(cust.getCust_id());
		
		if(ct.isPresent())
		{
			customerRepository.saveAndFlush(cust);
			return "UPDATED RECORD "+cust.getCust_id();
		}
		else
		{
			return "RECORD NOT FOUND";
		}
	}
	public String deleteCustomer(int id)
	{
		if(customerRepository.existsById(id))
		{
			customerRepository.deleteById(id);
			return "customer DELETED";
		}
		else
		{
			return "Customer not found";
		}
	}

}
